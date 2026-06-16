export const scenario_snowy_skalhorn_75_03 = {
	"scenario_id": "snowy_skalhorn_75_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "뿔잔 표면의 수정들이 더욱 선명해졌다. 그 안의 얼굴들은 — 이제 미소 짓는 듯했다.",
						"english": "The crystals on the horn's surface grew clearer. The faces within — now seemed to smile.",
						"japanese": "角笛の表面の結晶が、より鮮明になった。その中の顔は — 今や微笑んでいるようだった。",
						"chinese": "号角表面的水晶变得更加清晰。里面的面孔——现在似乎在微笑。",
						"french": "Les cristaux à la surface du cor devinrent plus nets. Les visages à l'intérieur — semblaient désormais sourire.",
						"spanish": "Los cristales en la superficie del cuerno se hicieron más claros. Los rostros en su interior, ahora parecían sonreír.",
						"vietnamese": "Các tinh thể trên bề mặt chiếc sừng trở nên rõ ràng hơn. Những khuôn mặt bên trong — giờ dường như đang mỉm cười.",
						"thai": "ผลึกบนพื้นผิวของเขาสัตว์ชัดเจนขึ้น ใบหน้าข้างใน – บัดนี้ดูเหมือนจะยิ้ม",
						"hindi": "सींग की सतह पर क्रिस्टल और स्पष्ट हो गए। अंदर के चेहरे — अब मुस्कुराते हुए लग रहे थे।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 웅얼거림… 이제 노래처럼 들려.",
						"english": "These murmurs... now they sound like a song.",
						"japanese": "このささやき…もう歌のように聞こえる。",
						"chinese": "这些低语……现在听起来像一首歌。",
						"french": "Ces murmures... maintenant, ils sonnent comme une chanson.",
						"spanish": "Estos murmullos... ahora suenan como una canción.",
						"vietnamese": "Những lời lầm bầm này… giờ nghe như một bài hát.",
						"thai": "เสียงพึมพำนี่… ตอนนี้ฟังดูเหมือนเพลง",
						"hindi": "ये फुसफुसाहटें… अब एक गाने जैसी लग रही हैं।"
					}
				},
				{
					"content": {
						"korean": "광기의 찬가… 듣지 마.",
						"english": "The hymn of madness... Don't listen.",
						"japanese": "狂気の賛歌…聞くな。",
						"chinese": "疯狂的赞歌……别听。",
						"french": "L'hymne de la folie... N'écoute pas.",
						"spanish": "El himno de la locura... No escuches.",
						"vietnamese": "Bài thánh ca của sự điên loạn… Đừng nghe.",
						"thai": "เพลงสวดแห่งความวิกลจริต… อย่าไปฟังนะ",
						"hindi": "पागलपन का भजन… मत सुनो।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad"
				},
				{
					"speaker": "ivar",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "강한 자만이 견딜 수 있다. 약한 자는… 홀려 쓰러지겠지.",
						"english": "Only the strong can endure. The weak... will be ensnared and fall.",
						"japanese": "強き者だけが耐えうる。弱き者は…魅入られて倒れるだろう。",
						"chinese": "唯强者能承受。弱者……将会被迷惑而倒下。",
						"french": "Seuls les forts peuvent endurer. Les faibles... seront piégés et tomberont.",
						"spanish": "Solo los fuertes pueden resistir. Los débiles... serán seducidos y caerán.",
						"vietnamese": "Chỉ kẻ mạnh mới có thể chịu đựng. Kẻ yếu… sẽ bị mê hoặc và gục ngã.",
						"thai": "ผู้แข็งแกร่งเท่านั้นที่ทนได้ ผู้อ่อนแอ… จะถูกล่อลวงแล้วล้มลง",
						"hindi": "केवल मज़बूत ही सहन कर सकते हैं। कमज़ोर… मोहकर गिर जाएंगे।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "축제의 가락은 점점 더 매혹적으로 변했다. 한 동료의 눈빛이 흐려졌다.",
						"english": "The festival's melody grew ever more enchanting. A comrade's eyes glazed over.",
						"japanese": "祭りの調べは、ますます魅惑的になった。ある仲間の目つきがぼんやりとした。",
						"chinese": "节日的旋律变得越来越迷人。一个同伴的眼神变得模糊了。",
						"french": "La mélodie du festival devint de plus en plus envoûtante. Le regard d'un compagnon se voila.",
						"spanish": "La melodía del festival se volvió cada vez más encantadora. Los ojos de un compañero se nublaron.",
						"vietnamese": "Giai điệu lễ hội ngày càng trở nên mê hoặc. Ánh mắt của một đồng đội trở nên đờ đẫn.",
						"thai": "ท่วงทำนองแห่งเทศกาลเย้ายวนยิ่งขึ้นเรื่อยๆ แววตาของสหายคนหนึ่งพร่ามัวลง",
						"hindi": "उत्सव की धुन और भी मनमोहक होती गई। एक साथी की आँखें धुंधली हो गईं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "…아름다워. 저 속으로….",
						"english": "...Beautiful. Into that...",
						"japanese": "…美しい。あの奥へ…。",
						"chinese": "……真美。到那里面去……。",
						"french": "...Magnifique. Là-dedans...",
						"spanish": "...Hermoso. Hacia eso...",
						"vietnamese": "...Đẹp quá. Vào trong đó...",
						"thai": "…ช่างงดงาม เข้าไปข้างในนั้น…",
						"hindi": "…सुंदर। उसमें…।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "character_any",
					"action": "focus"
				},
				{
					"type": "direction",
					"action": "move",
					"spot": [
						5,
						4
					],
					"speaker": "character_any",
					"duration_ms": 700
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "angry",
					"content": {
						"korean": "정신 차려! 약해지지 마!",
						"english": "Snap out of it! Don't weaken!",
						"japanese": "気をしっかり持て！弱気になるな！",
						"chinese": "振作起来！别软弱！",
						"french": "Reprends-toi ! Ne faiblis pas !",
						"spanish": "¡Espabila! ¡No te debilites!",
						"vietnamese": "Tỉnh táo lại! Đừng yếu lòng!",
						"thai": "ตั้งสติไว้! อย่าอ่อนแอ!",
						"hindi": "होश में आओ! कमजोर मत पड़ो!"
					}
				},
				{
					"action": "shake",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 가락에 홀리면 끝이다!",
						"english": "Fall for this tune and it's over!",
						"japanese": "この調べに惑わされたら終わりだ！",
						"chinese": "若被这曲调迷惑，就完了！",
						"french": "Succombe à cette mélodie et c'sest la fin !",
						"spanish": "¡Si te dejas seducir por esta melodía, se acabó!",
						"vietnamese": "Mê mẩn điệu nhạc này là xong đời!",
						"thai": "ถ้าหลงใหลทำนองนี้ก็จบสิ้น!",
						"hindi": "इस धुन में खो गए तो खत्म!"
					},
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "홀리는 가락은 멈추지 않았다. 모두의 이성이 시험대에 올랐다.",
						"english": "The enchanting melody didn't stop. Everyone's sanity was put to the test.",
						"japanese": "惑わす調べは止まなかった。皆の理性が試された。",
						"chinese": "迷惑的曲调并未停止。所有人的理智都受到了考验。",
						"french": "La mélodie envoûtante ne s'arrêtait pas. La raison de chacun était mise à l'épreuve.",
						"spanish": "La melodía seductora no cesaba. La cordura de todos estaba a prueba.",
						"vietnamese": "Giai điệu mê hoặc không ngừng. Lý trí của mọi người đang bị thử thách.",
						"thai": "ท่วงทำนองที่ชวนหลงใหลไม่หยุดยั้ง สติของทุกคนถูกทดสอบ",
						"hindi": "मंत्रमुग्ध कर देने वाली धुन नहीं रुकी। सबकी विवेकशीलता की परीक्षा हो रही थी।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "계속 듣고 있으면… 머리가 깨질 것 같아.",
						"english": "If I keep listening... my head feels like it's splitting.",
						"japanese": "聴き続けていると…頭が割れそうだ。",
						"chinese": "继续听下去…我的头快要裂开了。",
						"french": "Si je continue d'écouter… ma tête va éclater.",
						"spanish": "Si sigo escuchando… siento que la cabeza me va a estallar.",
						"vietnamese": "Cứ nghe mãi... đầu tôi như muốn nổ tung.",
						"thai": "ถ้าฟังต่อไปเรื่อยๆ...หัวฉันจะแตกแล้ว",
						"hindi": "अगर मैं सुनता रहा... तो मेरा सिर फट जाएगा।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "강함의 끝은 어디인가? 이 노래가 답을 알려줄 것 같군.",
						"english": "Where is the limit of strength? This song seems to hold the answer.",
						"japanese": "強さの果てはどこにある？この歌が答えを教えてくれそうだ。",
						"chinese": "力量的尽头在哪里？这首歌似乎会告诉我答案。",
						"french": "Où est la limite de la force ? Cette chanson semble détenir la réponse.",
						"spanish": "Dónde está el límite de la fuerza? Esta canción parece tener la respuesta.",
						"vietnamese": "Giới hạn của sức mạnh là ở đâu? Bài hát này dường như sẽ cho ta câu trả lời.",
						"thai": "จุดสิ้นสุดของความแข็งแกร่งอยู่ที่ใด? เพลงนี้ดูเหมือนจะบอกคำตอบให้",
						"hindi": "शक्ति की सीमा कहाँ है? यह गीत उत्तर बताएगा, ऐसा लगता है।"
					},
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "angry",
					"content": {
						"korean": "하지만… 먼저 무너지는 건 나일 리 없어.",
						"english": "But... I won't be the first to break.",
						"japanese": "しかし…最初に倒れるのは私ではない。",
						"chinese": "但是…我绝不会是第一个崩溃的。",
						"french": "Mais… je ne serai pas le premier à craquer.",
						"spanish": "Pero… no seré yo quien caiga primero.",
						"vietnamese": "Nhưng… người gục ngã trước chắc chắn không phải là ta.",
						"thai": "แต่...ฉันจะไม่ใช่คนแรกที่พังทลาย",
						"hindi": "लेकिन... मैं सबसे पहले हार मानने वाला नहीं हूँ।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "가장 깊은 곳. 찬가는 절규로 가득 찬 거대한 합창이 되어 울려 퍼졌다.",
						"english": "The deepest place. The hymn echoed as a colossal chorus filled with screams.",
						"japanese": "最も深き場所。賛歌は絶叫に満ちた巨大な合唱となって響き渡った。",
						"chinese": "最深之处。赞歌化作了充满绝望呐喊的巨大合唱，回荡不绝。",
						"french": "L'endroit le plus profond. L'hymne résonnait comme un immense chœur rempli de hurlements.",
						"spanish": "El lugar más profundo. El himno resonaba como un coro colosal lleno de gritos.",
						"vietnamese": "Nơi sâu thẳm nhất. Bài ca tụng vang lên như một hợp xướng khổng lồ đầy tiếng thét.",
						"thai": "สถานที่ที่ลึกที่สุด บทเพลงสรรเสริญก้องกังวานเป็นการประสานเสียงอันยิ่งใหญ่ที่เต็มไปด้วยเสียงกรีดร้อง",
						"hindi": "सबसे गहरा स्थान। स्तुतिगान चीखों से भरा एक विशाल कोरस बनकर गूंज रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이건… 노래가 아니야. 비명이야.",
						"english": "This isn't... a song. It's a scream.",
						"japanese": "これは…歌じゃない。悲鳴だ。",
						"chinese": "这不是…歌。这是尖叫。",
						"french": "Ce n'est pas… une chanson. C'est un cri.",
						"spanish": "Esto no es… una canción. Es un grito.",
						"vietnamese": "Đây không phải... một bài hát. Đây là tiếng thét.",
						"thai": "นี่ไม่ใช่...เพลง มันคือเสียงกรีดร้อง",
						"hindi": "यह... एक गाना नहीं है। यह एक चीख है।"
					}
				},
				{
					"content": {
						"korean": "절규를 찬가로 둔갑시킨 자. 그 끝을 보겠다.",
						"english": "The one who disguised screams as hymns. I will see their end.",
						"japanese": "絶叫を賛歌に偽装した者。その末路を見てやろう。",
						"chinese": "将绝望呐喊伪装成赞歌之人。我将见证其结局。",
						"french": "Celui qui a déguisé les cris en hymnes. Je verrai sa fin.",
						"spanish": "El que disfrazó los gritos de himnos. Veré su final.",
						"vietnamese": "Kẻ đã biến tiếng thét thành bài ca tụng. Ta sẽ thấy kết cục của hắn.",
						"thai": "ผู้ที่ปลอมแปลงเสียงกรีดร้องให้เป็นเพลงสรรเสริญ ฉันจะเห็นจุดจบของมัน",
						"hindi": "वह जिसने चीखों को स्तुतिगान में बदला। मैं उसका अंत देखूँगा।"
					},
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…겨우 막은 건가? 하지만… 절규는 사라지지 않아. 영원히 노래할 것이다.",
						"english": "...Did we barely stop it? But... the screams won't disappear. They will sing forever.",
						"japanese": "…かろうじて止めたのか？だが…絶叫は消えない。永遠に歌い続けるだろう。",
						"chinese": "…勉强挡住了吗？但是…这尖叫不会消失。它将永远歌唱。",
						"french": "...On a à peine réussi à l'arrêter ? Mais... les cris ne disparaîtront pas. Ils chanteront éternellement.",
						"spanish": "¿...Apenas lo detuvimos? Pero... los gritos no desaparecerán. Cantarán por siempre.",
						"vietnamese": "...Chỉ vừa đủ ngăn chặn thôi sao? Nhưng... tiếng gào thét sẽ không biến mất. Nó sẽ hát mãi mãi.",
						"thai": "เราหยุดมันได้แค่เฉียดฉิวเหรอ? แต่...เสียงกรีดร้องจะไม่หายไป มันจะร้องเพลงตลอดไป",
						"hindi": "...क्या हमने इसे बमुश्किल रोका? लेकिन... चीखें गायब नहीं होंगी। वे हमेशा गाती रहेंगी।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "ivar",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…시끄러워. 잠잠해진 줄 알았는데.",
						"english": "...It's loud. I thought it had quieted down.",
						"japanese": "…うるさい。静かになったと思ったのに。",
						"chinese": "…真吵。我以为它已经安静下来了。",
						"french": "...C'est bruyant. Je pensais que ça s'était calmé.",
						"spanish": "...Es ruidoso. Pensé que se había calmado.",
						"vietnamese": "...Ồn ào quá. Cứ tưởng nó đã yên tĩnh rồi chứ.",
						"thai": "เสียงดังจัง นึกว่าจะสงบลงแล้ว",
						"hindi": "...यह शोरगुल है। मैंने सोचा था कि यह शांत हो गया था।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "끝난 게 아니었어? 여전히 뭔가… 들려.",
						"english": "It wasn't over? I can still hear something...",
						"japanese": "終わってなかったのか？まだ何か…聞こえる。",
						"chinese": "还没结束吗？我好像…还在听到什么。",
						"french": "Ce n'était pas fini ? J'entends encore quelque chose...",
						"spanish": "¿No había terminado? Todavía escucho algo...",
						"vietnamese": "Chưa kết thúc sao? Vẫn còn gì đó… nghe thấy.",
						"thai": "ยังไม่จบเหรอ? ยังได้ยินอะไรบางอย่าง...",
						"hindi": "क्या यह खत्म नहीं हुआ था? मुझे अभी भी कुछ सुनाई दे रहा है..."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "광기의 찬가는 멈췄지만, 수정 속 얼굴들은 여전히 입을 벌리고 있었다.",
						"english": "The hymn of madness ceased, but the faces in the crystal still gaped.",
						"japanese": "狂気の賛歌は止んだが、水晶の中の顔々は依然として口を開けていた。",
						"chinese": "疯狂的赞歌停止了，但水晶中的面孔仍然张着嘴。",
						"french": "L'hymne de la folie cessa, mais les visages dans le cristal restaient bouche bée.",
						"spanish": "El himno de la locura cesó, pero los rostros en el cristal seguían boquiabiertos.",
						"vietnamese": "Khúc ca của sự điên loạn đã dừng lại, nhưng những khuôn mặt trong pha lê vẫn há hốc mồm.",
						"thai": "เพลงสรรเสริญแห่งความบ้าคลั่งหยุดลงแล้ว แต่ใบหน้าในผลึกยังคงอ้าปากค้าง",
						"hindi": "पागलपन का भजन बंद हो गया, लेकिन क्रिस्टल में चेहरे अभी भी खुले हुए थे।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그것은 강요된 합창이었다. 끝나지 않는 절규.",
						"english": "It was a forced chorus. An unending shriek.",
						"japanese": "それは強要された合唱だった。終わらない絶叫。",
						"chinese": "那是一场合唱。永无止境的尖叫。",
						"french": "C'était un chœur forcé. Un cri sans fin.",
						"spanish": "Fue un coro forzado. Un grito interminable.",
						"vietnamese": "Đó là một điệp khúc bị ép buộc. Một tiếng thét không ngừng.",
						"thai": "มันคือบทเพลงประสานเสียงที่ถูกบังคับ เสียงกรีดร้องที่ไม่สิ้นสุด",
						"hindi": "यह एक जबरन गाया गया कोरस था। एक अंतहीन चीख।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 기다리고 있었다. 모든 절규의 근원인 듯했다.",
						"english": "A colossal shadow waited. It seemed to be the source of all screams.",
						"japanese": "巨大な影が待っていた。すべての絶叫の根源であるようだった。",
						"chinese": "巨大的黑影正在等待。它似乎是所有绝望呐喊的根源。",
						"french": "Une ombre colossale attendait. Elle semblait être la source de tous les cris.",
						"spanish": "Una sombra colosal esperaba. Parecía ser la fuente de todos los gritos.",
						"vietnamese": "Một bóng đen khổng lồ đang đợi. Nó dường như là nguồn gốc của mọi tiếng thét.",
						"thai": "เงาขนาดมหึมารออยู่ ดูเหมือนจะเป็นต้นกำเนิดของเสียงกรีดร้องทั้งหมด",
						"hindi": "एक विशाल परछाई इंतज़ार कर रही थी। वह सभी चीखों का स्रोत प्रतीत हो रही थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "들어라. 이 영원한 축가를. 네 이성도 곧 무너질 것이다.",
						"english": "Hear this eternal hymn. Your reason too shall soon collapse.",
						"japanese": "聞け。この永遠の祝歌を。お前の理性もすぐ崩れ落ちるだろう。",
						"chinese": "听吧。这永恒的颂歌。你的理性也很快会崩溃。",
						"french": "Écoute. Cet hymne éternel. Ta raison s'effondrera bientôt.",
						"spanish": "Escucha. Este himno eterno. Tu razón también colapsará pronto.",
						"vietnamese": "Hãy nghe đi. Khúc ca chúc mừng vĩnh cửu này. Lý trí của ngươi cũng sẽ sớm sụp đổ thôi.",
						"thai": "จงฟังเพลงสรรเสริญอันเป็นนิรันดร์นี้เถิด สติสัมปชัญญะของเจ้าก็จะพังทลายลงในไม่ช้า",
						"hindi": "सुनो। इस शाश्वत भजन को। तुम्हारी बुद्धि भी शीघ्र ही ढह जाएगी।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "헛소리! 강함을 얕보지 마라!",
						"english": "Nonsense! Do not underestimate my strength!",
						"japanese": "戯言！強さを侮るな！",
						"chinese": "胡说！不要小看我的强大！",
						"french": "Absurdités ! Ne sous-estime pas ma force !",
						"spanish": "¡Tonterías! ¡No subestimes mi fuerza!",
						"vietnamese": "Vô lý! Đừng coi thường sức mạnh!",
						"thai": "ไร้สาระ! อย่าดูถูกความแข็งแกร่ง!",
						"hindi": "बकवास! मेरी शक्ति को कम मत आँको!"
					},
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "광기의 찬가가 모든 이성을 잠식했다.",
						"english": "The hymn of madness devoured all reason.",
						"japanese": "狂気の賛歌が、すべての理性を侵食した。",
						"chinese": "疯狂的赞歌吞噬了所有的理性。",
						"french": "L'hymne de la folie dévora toute raison.",
						"spanish": "El himno de la locura devoró toda razón.",
						"vietnamese": "Khúc ca của sự điên loạn đã nuốt chửng mọi lý trí.",
						"thai": "เพลงสรรเสริญแห่งความบ้าคลั่งกลืนกินสติสัมปชัญญะทั้งหมด",
						"hindi": "पागलपन के भजन ने सभी बुद्धिमत्ता को निगल लिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "가련한 영혼들. 내 노래의 일부가 되어라.",
						"english": "Pitiable souls. Become part of my song.",
						"japanese": "哀れな魂たちよ。私の歌の一部となれ。",
						"chinese": "可怜的灵魂们。成为我歌曲的一部分吧。",
						"french": "Âmes pitoyables. Devenez une partie de mon chant.",
						"spanish": "Almas lastimosas. Convertíos en parte de mi canción.",
						"vietnamese": "Những linh hồn đáng thương. Hãy trở thành một phần bài hát của ta.",
						"thai": "วิญญาณที่น่าเวทนา จงมาเป็นส่วนหนึ่งของบทเพลงของข้า",
						"hindi": "दयालु आत्माएँ। मेरे गीत का हिस्सा बनो।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직, 끝이 아니야.",
						"english": "...It's not over, yet.",
						"japanese": "…まだ、終わりじゃない。",
						"chinese": "…还没，结束。",
						"french": "...Ce n'est pas fini, encore.",
						"spanish": "...Aún no, ha terminado.",
						"vietnamese": "...Chưa, kết thúc đâu.",
						"thai": "ยังไม่จบหรอก",
						"hindi": "...अभी, यह खत्म नहीं हुआ है।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "강함은 이런 식으로 끝나지 않아!",
						"english": "Strength doesn't end this way!",
						"japanese": "強さはこんな風に終わらない！",
						"chinese": "力量不会如此终结！",
						"french": "La force ne se termine pas ainsi !",
						"spanish": "¡La fuerza no termina así!",
						"vietnamese": "Sức mạnh không kết thúc như thế này!",
						"thai": "ความแข็งแกร่งไม่จบลงแบบนี้!",
						"hindi": "शक्ति इस तरह खत्म नहीं होती!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"뿔잔의 웅얼거림은 점점 더 또렷해졌다.",
			"그것은 마을 사람들의 절규였다.",
			"하지만 이젠 광기의 찬가처럼 들려왔다.",
			"이성을 좀먹는 가락. 그 앞에서 모두가 시험받았다."
		],
		"english": [
			"The horn's murmurs grew clearer.",
			"It was the villagers' screams.",
			"But now it sounded like a hymn of madness.",
			"A melody that gnawed at sanity. All were tested before it."
		],
		"japanese": [
			"角笛のささやきは、ますます鮮明になった。",
			"それは村人たちの絶叫だった。",
			"しかし、今やそれは狂気の賛歌のように聞こえた。",
			"理性を蝕む調べ。その前で、皆が試された。"
		],
		"chinese": [
			"号角的低语声越来越清晰。",
			"那是村民们的尖叫。",
			"但现在，它听起来像是一首疯狂的赞歌。",
			"侵蚀理智的旋律。在此面前，所有人皆受考验。"
		],
		"french": [
			"Les murmures du cor devinrent de plus en plus clairs.",
			"C'étaient les cris des villageois.",
			"Mais à présent, cela résonnait comme un hymne de folie.",
			"Une mélodie rongeant la raison. Tous furent mis à l'épreuve."
		],
		"spanish": [
			"Los murmullos del cuerno se hicieron más claros.",
			"Eran los gritos de los aldeanos.",
			"Pero ahora sonaba como un himno de locura.",
			"Una melodía que carcomía la cordura. Todos fueron puestos a prueba ante ella."
		],
		"vietnamese": [
			"Những lời lầm bầm từ chiếc sừng ngày càng rõ ràng hơn.",
			"Đó là tiếng hét thất thanh của dân làng.",
			"Nhưng giờ đây, nó nghe như một bài thánh ca của sự điên loạn.",
			"Một giai điệu gặm nhấm lý trí. Tất cả đều bị thử thách trước nó."
		],
		"thai": [
			"เสียงพึมพำจากเขาสัตว์ชัดเจนขึ้นเรื่อยๆ",
			"มันคือเสียงกรีดร้องของชาวบ้าน",
			"แต่ตอนนี้มันกลับฟังดูเหมือนเพลงสวดแห่งความวิกลจริต",
			"ท่วงทำนองที่กัดกินสติสัมปชัญญะ ทุกคนต่างถูกทดสอบต่อหน้าสิ่งนั้น"
		],
		"hindi": [
			"सींग की फुसफुसाहटें और स्पष्ट होती गईं।",
			"वे ग्रामीणों की चीखें थीं।",
			"लेकिन अब यह पागलपन के भजन जैसा लग रहा था।",
			"एक धुन जो विवेक को कुतर रही थी। उसके सामने सभी की परीक्षा हुई।"
		]
	}
} as const;
