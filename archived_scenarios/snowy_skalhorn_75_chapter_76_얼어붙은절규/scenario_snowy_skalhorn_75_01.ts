export const scenario_snowy_skalhorn_75_01 = {
	"scenario_id": "snowy_skalhorn_75_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"뿔잔의 심연. 그 속에서, 잊힌 절규가 속삭인다.",
			"수정 속에 갇힌 얼굴들. 그들의 침묵은 비명이었다.",
			"기록자는 붓을 들었다. 이제 그 소리를 해독할 시간.",
			"이 함정의 끝에 무엇이 기다릴까?"
		],
		"english": [
			"Abyss of the Horned Chalice. Within, forgotten screams whisper.",
			"Faces trapped in crystal. Their silence was a scream.",
			"The Scribe picked up the brush. Time to decipher those sounds.",
			"What awaits at the end of this trap?"
		],
		"japanese": [
			"角杯の深淵。その中で、忘れ去られた叫びが囁く。",
			"水晶に囚われた顔々。彼らの沈黙は悲鳴だった。",
			"記録者は筆を取った。今こそ、その音を解読する時。",
			"この罠の先に何が待つのか？"
		],
		"chinese": [
			"角杯深渊。其中，被遗忘的绝叫低语着。",
			"水晶中被困的面孔。他们的沉默是一种尖叫。",
			"记录者拿起笔。是时候解读那些声音了。",
			"这个陷阱的尽头等待着什么？"
		],
		"french": [
			"L'abîme du calice cornu. En son sein, des cris oubliés murmurent.",
			"Des visages piégés dans le cristal. Leur silence était un cri.",
			"Le Scribe a pris la plume. Il est temps de déchiffrer ces sons.",
			"Qu'est-ce qui nous attend au bout de ce piège ?"
		],
		"spanish": [
			"El abismo del cáliz cornudo. Dentro, gritos olvidados susurran.",
			"Rostros atrapados en el cristal. Su silencio era un grito.",
			"El Escriba tomó el pincel. Es hora de descifrar esos sonidos.",
			"¿Qué nos espera al final de esta trampa?"
		],
		"vietnamese": [
			"Vực thẳm của Chén Sừng. Bên trong, những tiếng hét bị lãng quên thì thầm.",
			"Những khuôn mặt bị mắc kẹt trong pha lê. Sự im lặng của họ là một tiếng hét.",
			"Người ghi chép cầm bút lên. Đã đến lúc giải mã những âm thanh đó.",
			"Điều gì đang chờ đợi ở cuối cái bẫy này?"
		],
		"thai": [
			"ห้วงลึกแห่งจอกเขา ภายในนั้น เสียงกรีดร้องที่ถูกลืมเลือนกระซิบแผ่วเบา",
			"ใบหน้าติดอยู่ในคริสตัล ความเงียบของพวกเขาคือเสียงกรีดร้อง",
			"ผู้บันทึกหยิบพู่กันขึ้นมา ได้เวลาถอดรหัสเสียงเหล่านั้นแล้ว",
			"อะไรจะรออยู่ที่ปลายทางของกับดักนี้?"
		],
		"hindi": [
			"सींग वाले प्याले की खाई। भीतर, भूली हुई चीखें फुसफुसाती हैं।",
			"क्रिस्टल में फंसे चेहरे। उनकी खामोशी एक चीख थी।",
			"लेखक ने कलम उठाई। अब उन ध्वनियों को समझना का समय है।",
			"इस जाल के अंत में क्या इंतजार कर रहा है?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "뿔잔의 표면. 수정마다 일그러진 얼굴이 박혀 있었다.",
						"english": "The surface of the Horned Chalice. Distorted faces embedded in each crystal.",
						"japanese": "角杯の表面。水晶ごとに歪んだ顔が埋め込まれていた。",
						"chinese": "角杯的表面。每个水晶中都镶嵌着扭曲的面孔。",
						"french": "La surface du Calice Cornu. Des visages déformés incrustés dans chaque cristal.",
						"spanish": "La superficie del Cáliz Cornudo. Rostros distorsionados incrustados en cada cristal.",
						"vietnamese": "Bề mặt của Chén Sừng. Những khuôn mặt méo mó được nhúng vào mỗi tinh thể.",
						"thai": "พื้นผิวของจอกเขา ใบหน้าบิดเบี้ยวฝังอยู่ในคริสตัลแต่ละก้อน",
						"hindi": "सींग वाले प्याले की सतह। प्रत्येक क्रिस्टल में विकृत चेहरे जड़े हुए थे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이건… 사람 얼굴?",
						"english": "Is this... a human face?",
						"japanese": "これは…人の顔？",
						"chinese": "这是…人脸？",
						"french": "C'est... un visage humain ?",
						"spanish": "¿Es esto... un rostro humano?",
						"vietnamese": "Đây là... khuôn mặt người ư?",
						"thai": "นี่มัน... ใบหน้าคน?",
						"hindi": "यह... एक इंसानी चेहरा?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "낮은 웅얼거림이… 들려.",
						"english": "A low murmur... I hear it.",
						"japanese": "低い呟きが…聞こえる。",
						"chinese": "低沉的喃喃声…我听到了。",
						"french": "Un faible murmure... je l'entends.",
						"spanish": "Un murmullo bajo... lo oigo.",
						"vietnamese": "Một tiếng lẩm bầm khẽ... tôi nghe thấy.",
						"thai": "เสียงพึมพำต่ำๆ... ได้ยินแล้ว",
						"hindi": "एक धीमी गुनगुनाहट... मुझे सुनाई दे रही है।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "멈추지 않는 절규… 과거의 기억일까.",
						"english": "Unceasing screams... memories of the past?",
						"japanese": "止まらない絶叫…過去の記憶なのだろうか。",
						"chinese": "不停歇的绝叫…是过去的记忆吗？",
						"french": "Des cris incessants... des souvenirs du passé ?",
						"spanish": "Gritos incesantes... ¿recuerdos del pasado?",
						"vietnamese": "Những tiếng hét không ngừng... có phải là ký ức của quá khứ?",
						"thai": "เสียงกรีดร้องไม่หยุด... ความทรงจำในอดีตหรือเปล่า?",
						"hindi": "लगातार चीखें... क्या ये अतीत की यादें हैं?"
					}
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이건 내가 해독해야 할 기록이야.",
						"english": "This is a record I must decipher.",
						"japanese": "これは私が解読すべき記録だ。",
						"chinese": "这是我必须解读的记录。",
						"french": "C'est un enregistrement que je dois déchiffrer.",
						"spanish": "Este es un registro que debo descifrar.",
						"vietnamese": "Đây là một ghi chép mà tôi phải giải mã.",
						"thai": "นี่คือบันทึกที่ฉันต้องถอดรหัส",
						"hindi": "यह एक ऐसा रिकॉर्ड है जिसे मुझे समझना होगा।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 웅얼거림은… 찬가처럼 들리지만, 슬픔이 섞여 있어.",
						"english": "This murmur... sounds like a hymn, but mixed with sorrow.",
						"japanese": "この呟きは…賛歌のように聞こえるが、悲しみが混じっている。",
						"chinese": "这种喃喃声…听起来像一首赞美诗，但又夹杂着悲伤。",
						"french": "Ce murmure... sonne comme un hymne, mais il est mêlé de tristesse.",
						"spanish": "Este murmullo... suena como un himno, pero mezclado con tristeza.",
						"vietnamese": "Tiếng lầm bầm này... nghe như một bài thánh ca, nhưng lại pha lẫn nỗi buồn.",
						"thai": "เสียงพึมพำนี้... ฟังดูเหมือนเพลงสวด แต่ปะปนไปด้วยความโศกเศร้า",
						"hindi": "यह गुनगुनाहट... एक भजन जैसी लगती है, लेकिन इसमें दुख मिला हुआ है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리인지 모르겠어. 그냥 불길해.",
						"english": "I don't know what it means. It just feels ominous.",
						"japanese": "何を意味するのか分からない。ただ不吉だ。",
						"chinese": "我不知道那是什么意思。只是感觉不祥。",
						"french": "Je ne sais pas ce que ça veut dire. C'est juste de mauvais augure.",
						"spanish": "No sé qué significa. Simplemente es siniestro.",
						"vietnamese": "Tôi không biết nó có nghĩa là gì. Chỉ là điềm gở thôi.",
						"thai": "ฉันไม่รู้ว่ามันหมายถึงอะไร แค่รู้สึกไม่เป็นมงคล",
						"hindi": "मुझे नहीं पता इसका क्या मतलब है। बस अपशगुन लग रहा है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "아니. 이 안에… 숨겨진 이야기가 있어. 해독해야 해.",
						"english": "No. There's a hidden story in here... I must decipher it.",
						"japanese": "違う。この中に…隠された物語がある。解読しなければ。",
						"chinese": "不。这里面…藏着一个故事。我必须解开它。",
						"french": "Non. Il y a… une histoire cachée là-dedans. Je dois la déchiffrer.",
						"spanish": "No. Aquí hay… una historia oculta. Debo descifrarla.",
						"vietnamese": "Không. Bên trong này… có một câu chuyện ẩn giấu. Tôi phải giải mã nó.",
						"thai": "ไม่สิ…ข้างในนี้…มีเรื่องราวที่ซ่อนอยู่ ฉันต้องถอดรหัส",
						"hindi": "नहीं। इसके अंदर… एक छिपी हुई कहानी है। मुझे इसे समझना होगा।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 룬… 마을 사람들의 이름과 유사한 배열이야.",
						"english": "These runes… their arrangement is similar to the villagers' names.",
						"japanese": "このルーン…村人たちの名前に似た配列だ。",
						"chinese": "这些符文…排列方式与村民的名字相似。",
						"french": "Ces runes… leur agencement ressemble aux noms des villageois.",
						"spanish": "Estas runas… su disposición es similar a los nombres de los aldeanos.",
						"vietnamese": "Những chữ rune này… cách sắp xếp của chúng tương tự với tên của dân làng.",
						"thai": "รูนเหล่านี้…การจัดเรียงคล้ายกับชื่อของชาวบ้าน",
						"hindi": "ये रन… उनकी व्यवस्था ग्रामीणों के नामों से मिलती जुलती है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "설마… 저 얼굴들이 우리 마을 사람이라는 거야?",
						"english": "Surely not… are those faces our villagers?",
						"japanese": "まさか…あの顔たちが私たちの村人だと？",
						"chinese": "难道…那些面孔就是我们村里的人？",
						"french": "Impossible… Ces visages seraient-ils ceux de nos villageois ?",
						"spanish": "No será… ¿Esos rostros son de nuestra gente del pueblo?",
						"vietnamese": "Lẽ nào… những khuôn mặt kia là người làng của chúng ta?",
						"thai": "ไม่นะ… ใบหน้าเหล่านั้นคือคนในหมู่บ้านเราเหรอ?",
						"hindi": "कहीं ऐसा तो नहीं… वे चेहरे हमारे गाँव के लोग हैं?"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "아직 확실하진 않아. 하지만… 그럴 가능성이 커지고 있어.",
						"english": "It's not certain yet. But… the possibility is growing.",
						"japanese": "まだ確実ではない。だが…その可能性は高まっている。",
						"chinese": "还不确定。但是…这种可能性正在变大。",
						"french": "Ce n'est pas encore certain. Mais… la possibilité grandit.",
						"spanish": "Aún no es seguro. Pero… la posibilidad está aumentando.",
						"vietnamese": "Vẫn chưa chắc chắn. Nhưng… khả năng đó đang tăng lên.",
						"thai": "ยังไม่แน่ชัด แต่…ความเป็นไปได้กำลังเพิ่มขึ้น",
						"hindi": "अभी निश्चित नहीं है। लेकिन… इसकी संभावना बढ़ रही है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "점점 또렷해지고 있어. 이 절규의 주인들… 살아있는 기억들이야.",
						"english": "It's becoming clearer. The owners of these screams… they are living memories.",
						"japanese": "だんだん鮮明になってきている。この絶叫の主たち…生きている記憶だ。",
						"chinese": "越来越清晰了。这些尖叫的主人…是活着的记忆。",
						"french": "Ça devient de plus en plus clair. Les propriétaires de ces cris… ce sont des souvenirs vivants.",
						"spanish": "Se está volviendo más claro. Los dueños de estos gritos… son recuerdos vivos.",
						"vietnamese": "Nó đang trở nên rõ ràng hơn. Chủ nhân của những tiếng hét này… là những ký ức sống.",
						"thai": "มันชัดเจนขึ้นเรื่อยๆ เจ้าของเสียงกรีดร้องเหล่านี้…คือความทรงจำที่มีชีวิต",
						"hindi": "यह और स्पष्ट होता जा रहा है। इन चीखों के मालिक… जीवित यादें हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이대로 가면 위험할지도 몰라. 웅얼거림이 더 커졌어.",
						"english": "It might be dangerous if we continue like this. The murmuring has grown louder.",
						"japanese": "このままでは危険かもしれない。ざわめきが大きくなった。",
						"chinese": "这样下去可能会有危险。低语声更大了。",
						"french": "Continuer ainsi pourrait être dangereux. Le murmure est devenu plus fort.",
						"spanish": "Si seguimos así, podría ser peligroso. El murmullo se ha hecho más fuerte.",
						"vietnamese": "Cứ thế này có thể nguy hiểm. Tiếng lẩm bẩm đã lớn hơn.",
						"thai": "หากเป็นแบบนี้ต่อไปอาจเป็นอันตราย เสียงพึมพำดังขึ้น",
						"hindi": "ऐसे ही चलते रहे तो खतरा हो सकता है। बुदबुдаहट और बढ़ गई है।"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "진실을 알아야 해. 멈출 수 없어. 이건 기록자의 숙명이야.",
						"english": "I must know the truth. I can't stop. This is the chronicler's destiny.",
						"japanese": "真実を知らねばならない。止められない。これは記録者の宿命だ。",
						"chinese": "必须知道真相。不能停止。这是记录者的宿命。",
						"french": "Je dois connaître la vérité. Je ne peux pas m'arrêter. C'est le destin du chroniqueur.",
						"spanish": "Debo saber la verdad. No puedo parar. Este es el destino del cronista.",
						"vietnamese": "Phải biết sự thật. Không thể dừng lại. Đây là số mệnh của người ghi chép.",
						"thai": "ต้องรู้ความจริง หยุดไม่ได้ นี่คือชะตากรรมของนักบันทึก",
						"hindi": "मुझे सच्चाई जाननी होगी। मैं रुक नहीं सकता। यह एक इतिहासकार का भाग्य है।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 수정의 빛 속에서 모습을 드러냈다.",
						"english": "A colossal shadow emerged from the crystal's light.",
						"japanese": "巨大な影が水晶の光の中から姿を現した。",
						"chinese": "巨大的黑影在水晶的光芒中显现。",
						"french": "Une ombre colossale apparut dans la lumière du cristal.",
						"spanish": "Una sombra colosal emergió de la luz del cristal.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra trong ánh sáng của pha lê.",
						"thai": "เงาขนาดใหญ่ปรากฏขึ้นจากแสงของคริสตัล",
						"hindi": "क्रिस्टल की रोशनी में एक विशाल छाया प्रकट हुई।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히 여기까지 온 너희들… 이 웅얼거림을 멈추려 하는가?",
						"english": "You, who dared to come this far… do you seek to silence this murmuring?",
						"japanese": "よくもここまで来たな…このざわめきを止めようというのか？",
						"chinese": "你们这些胆敢来到这里的人…是想阻止这些低语吗？",
						"french": "Vous qui avez osé venir jusqu'ici… cherchez-vous à faire taire ce murmure ?",
						"spanish": "Vosotros, que os atrevisteis a llegar tan lejos… ¿intentáis detener este murmullo?",
						"vietnamese": "Các ngươi, những kẻ dám đến tận đây… có muốn ngăn chặn tiếng lẩm bẩm này không?",
						"thai": "พวกเจ้าที่กล้ามาถึงที่นี่…คิดจะหยุดเสียงพึมพำนี้หรือ?",
						"hindi": "तुम, जिन्होंने इतनी दूर आने की हिम्मत की… क्या तुम इस बुदबुदाहट को रोकना चाहते हो?"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거야? 이 절규를 만든 자가 너야?",
						"english": "Did you orchestrate all this? Are you the one who created this scream?",
						"japanese": "これ、全部お前が仕組んだのか？この絶叫を生み出したのは、お前か？",
						"chinese": "这一切都是你策划的吗？是你制造了这些尖叫？",
						"french": "C'est toi qui as orchestré tout ça ? C'est toi qui as créé ce hurlement ?",
						"spanish": "Fuiste tú quien orquestó todo esto? ¿Tú creaste este grito?",
						"vietnamese": "Ngươi đã sắp đặt tất cả chuyện này sao? Ngươi là kẻ tạo ra tiếng thét này ư?",
						"thai": "ทั้งหมดนี้เป็นฝีมือแกหรือ? แกคือผู้สร้างเสียงกรีดร้องนี้ใช่ไหม?",
						"hindi": "क्या तुमने यह सब रचा है? क्या तुम ही हो जिसने इस चीख को बनाया है?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이것은 영원한 노래. 멈출 수 없어.",
						"english": "This is an eternal song. It cannot be stopped.",
						"japanese": "これは永遠の歌だ。止めることなどできぬ。",
						"chinese": "这是永恒的歌。无法停止。",
						"french": "C'est un chant éternel. Il ne peut être arrêté.",
						"spanish": "Esta es una canción eterna. No se puede detener.",
						"vietnamese": "Đây là một bài ca vĩnh cửu. Không thể dừng lại.",
						"thai": "นี่คือบทเพลงนิรันดร์ หยุดมันไม่ได้",
						"hindi": "यह एक अनंत गीत है। इसे रोका नहीं जा सकता।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "너는 그들을 노래하게 한 거야. 강요된 절규를… 박제했어.",
						"english": "You made them sing. You… *taxidermied* their forced screams.",
						"japanese": "お前が彼らを歌わせたのだ。強要された絶叫を…剥製にした。",
						"chinese": "你让他们歌唱。你把强加的尖叫…制成了标本。",
						"french": "Tu les as forcés à chanter. Tu as… *empaillé* leurs hurlements forcés.",
						"spanish": "Los hiciste cantar. Tú… *disecaste* sus gritos forzados.",
						"vietnamese": "Ngươi đã bắt chúng hát. Ngươi đã… *nhồi bông* những tiếng thét cưỡng bức.",
						"thai": "แกบังคับให้พวกเขาร้องเพลง แกได้… *สตัฟฟ์* เสียงกรีดร้องที่ถูกบังคับไว้",
						"hindi": "तुमने उन्हें गाने पर मजबूर किया। तुमने उनकी जबरन चीखों को… *टैक्सीडर्मी* कर दिया।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…어리석은 것들. 이 노래는… 멈추지 않아… 사라지지 않아….",
						"english": "…Foolish creatures. This song… will not stop… will not disappear….",
						"japanese": "…愚かな者たちめ。この歌は…止まらぬ…消えぬ…。",
						"chinese": "…愚蠢的东西。这首歌…不会停止…不会消失…。",
						"french": "…Créatures stupides. Ce chant… ne s'arrêtera pas… ne disparaîtra pas….",
						"spanish": "…Criaturas tontas. Esta canción… no se detendrá… no desaparecerá….",
						"vietnamese": "…Những kẻ ngu ngốc. Bài ca này… sẽ không ngừng… không biến mất….",
						"thai": "…พวกโง่เง่า บทเพลงนี้… จะไม่หยุด… จะไม่หายไป….",
						"hindi": "…मूर्ख प्राणी। यह गीत… रुकेगा नहीं… मिटेगा नहीं…।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누가 멈추지 않는다는 거야? 네가 없으면 끝이야!",
						"english": "Who says it won't stop? Without you, it's over!",
						"japanese": "誰が止まらないだって？お前がいなければ終わりだ！",
						"chinese": "谁说不会停止？没有你，就结束了！",
						"french": "Qui a dit que ça ne s'arrêterait pas ? Sans toi, c'est fini !",
						"spanish": "Quién dice que no se detendrá? ¡Sin ti, se acabó!",
						"vietnamese": "Ai nói là không dừng lại? Không có ngươi, thì kết thúc rồi!",
						"thai": "ใครบอกว่ามันจะไม่หยุด? ถ้าไม่มีแก มันก็จบ!",
						"hindi": "कौन कहता है कि यह नहीं रुकेगा? तुम्हारे बिना, यह खत्म है!"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "하지만… 웅얼거림은 아직 멈추지 않았어. 더 깊은 곳에서….",
						"english": "But… the murmuring hasn't stopped yet. From deeper within….",
						"japanese": "しかし…あのざわめきはまだ止まっていない。もっと奥深い場所から…。",
						"chinese": "但是…低语声还没有停止。从更深处…",
						"french": "Mais… le murmure n'a pas encore cessé. Depuis les profondeurs….",
						"spanish": "Pero… el murmullo aún no ha cesado. Desde lo más profundo….",
						"vietnamese": "Nhưng… tiếng lầm bầm vẫn chưa ngừng lại. Từ sâu thẳm bên trong….",
						"thai": "แต่… เสียงพึมพำยังไม่หยุด จากส่วนที่ลึกกว่านั้น….",
						"hindi": "लेकिन… फुसफुसाहट अभी भी नहीं रुकी है। और भी गहराई से…।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그림자가 사라진 자리. 수정은 여전히 불길한 소리를 내고 있었다.",
						"english": "Where the shadow vanished, the crystal still emitted an ominous sound.",
						"japanese": "影が消えた場所で。水晶は依然として不吉な音を立てていた。",
						"chinese": "影子消失的地方。水晶仍在发出不祥的声音。",
						"french": "Là où l'ombre avait disparu, le cristal émettait toujours un son sinistre.",
						"spanish": "Donde la sombra se desvaneció, el cristal aún emitía un sonido ominoso.",
						"vietnamese": "Nơi cái bóng biến mất, tinh thể vẫn phát ra âm thanh đáng sợ.",
						"thai": "ณ ที่ที่เงาหายไป คริสตัลยังคงส่งเสียงที่น่าสะพรึงกลัว",
						"hindi": "जहां छाया गायब हो गई, क्रिस्टल अभी भी एक अशुभ ध्वनि उत्सर्जित कर रहा था।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 저항이군. 영원히 이 노래에 갇혀라.",
						"english": "Futile resistance. Be trapped in this song forever.",
						"japanese": "愚かな抵抗だな。永遠にこの歌に囚われろ。",
						"chinese": "徒劳的抵抗。永远被困在这首歌中吧。",
						"french": "Résistance futile. Sois piégé dans ce chant pour l'éternité.",
						"spanish": "Resistencia inútil. Permanece atrapado en esta canción para siempre.",
						"vietnamese": "Sự kháng cự vô ích. Hãy bị mắc kẹt trong bài ca này mãi mãi.",
						"thai": "การต่อต้านที่ไร้ประโยชน์ จงถูกจองจำอยู่ในบทเพลงนี้ชั่วนิรันดร์",
						"hindi": "व्यर्थ प्रतिरोध। इस गीत में हमेशा के लिए फंस जाओ।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어.",
						"english": "Ugh… It's not… over yet.",
						"japanese": "くっ…まだ…終わってない…。",
						"chinese": "呃…还没有…结束。",
						"french": "Urgh… Ce n'est pas… encore fini.",
						"spanish": "Ugh… Todavía no… ha terminado.",
						"vietnamese": "Khụ… Vẫn… chưa kết thúc.",
						"thai": "อึก… ยัง… ไม่จบ",
						"hindi": "उफ़… यह… अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "절대 포기하지 마. 이 절규는 아직 끝나지 않았어….",
						"english": "Never give up. This scream isn't over yet….",
						"japanese": "絶対に諦めるな。この絶叫はまだ終わっていない…。",
						"chinese": "绝不放弃。这尖叫声还没有结束…",
						"french": "N'abandonne jamais. Ce hurlement n'est pas encore terminé….",
						"spanish": "Nunca te rindas. Este grito aún no ha terminado….",
						"vietnamese": "Đừng bao giờ bỏ cuộc. Tiếng thét này vẫn chưa kết thúc….",
						"thai": "อย่าเพิ่งยอมแพ้ เสียงกรีดร้องนี้ยังไม่จบ….",
						"hindi": "कभी हार मत मानो। यह चीख अभी खत्म नहीं हुई है…।"
					}
				}
			]
		}
	]
} as const;
