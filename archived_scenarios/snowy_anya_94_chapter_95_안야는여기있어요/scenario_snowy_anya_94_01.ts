export const scenario_snowy_anya_94_01 = {
	"scenario_id": "snowy_anya_94_01",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "세계의 끝, 안야의 빛이 얼음처럼 굳어간다.",
						"english": "At world's end, Anya's light hardens like ice.",
						"japanese": "世界の果てで、アーニャの光が氷のように固まっていく。",
						"chinese": "世界尽头，安雅之光如冰般凝固。",
						"french": "Au bout du monde, la lumière d'Anya se fige comme de la glace.",
						"spanish": "En el fin del mundo, la luz de Anya se endurece como el hielo.",
						"vietnamese": "Tận cùng thế giới, ánh sáng của Anya đông cứng như băng.",
						"thai": "ณ ปลายสุดของโลก แสงแห่งอันย่ากำลังแข็งตัวเป็นน้ำแข็ง",
						"hindi": "दुनिया के अंत में, आन्या का प्रकाश बर्फ की तरह जम जाता है।"
					}
				},
				{
					"content": {
						"korean": "점점 투명해지고 있어.",
						"english": "It's growing increasingly transparent.",
						"japanese": "だんだん透明になっていく。",
						"chinese": "它正变得越来越透明。",
						"french": "Elle devient de plus en plus transparente.",
						"spanish": "Se está volviendo cada vez más transparente.",
						"vietnamese": "Nó đang dần trở nên trong suốt.",
						"thai": "มันกำลังโปร่งใสขึ้นเรื่อยๆ",
						"hindi": "यह धीरे-धीरे पारदर्शी होता जा रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기록에 따르면, 마지막 순간의 전조입니다.",
						"english": "According to records, it's a harbinger of the final moment.",
						"japanese": "記録によると、最後の瞬間の前兆です。",
						"chinese": "根据记载，这是最后时刻的预兆。",
						"french": "Selon les registres, c'est le présage du moment final.",
						"spanish": "Según los registros, es un presagio del momento final.",
						"vietnamese": "Theo ghi chép, đây là điềm báo của khoảnh khắc cuối cùng.",
						"thai": "ตามบันทึก นี่คือลางบอกเหตุของช่วงเวลาสุดท้าย",
						"hindi": "रिकॉर्ड के अनुसार, यह अंतिम क्षण का अग्रदूत है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "작별이라니…",
						"english": "A farewell...?",
						"japanese": "別れだなんて…",
						"chinese": "告别吗……",
						"french": "Un adieu...?",
						"spanish": "¿Despedida...?",
						"vietnamese": "Lời từ biệt sao...",
						"thai": "การอำลาหรือนี่...",
						"hindi": "विदाई...?"
					}
				},
				{
					"content": {
						"korean": "우리는 그 작별을 지켜야 합니다.",
						"english": "We must witness that farewell.",
						"japanese": "私たちはその別れを見届けなければなりません。",
						"chinese": "我们必须见证那场告别。",
						"french": "Nous devons être témoins de cet adieu.",
						"spanish": "Debemos presenciar esa despedida.",
						"vietnamese": "Chúng ta phải chứng kiến lời từ biệt đó.",
						"thai": "เราต้องเฝ้าดูการอำลานั้น",
						"hindi": "हमें उस विदाई का गवाह बनना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이곳은 잊힌 이들의 기록이 맴도는 곳.",
						"english": "This is where the forgotten's records linger.",
						"japanese": "ここは忘れられた者たちの記録が漂う場所。",
						"chinese": "这里是遗忘者记录萦绕之地。",
						"french": "C'est ici que les mémoires des oubliés subsistent.",
						"spanish": "Este es el lugar donde los registros de los olvidados persisten.",
						"vietnamese": "Đây là nơi những ghi chép của người bị lãng quên vương vấn.",
						"thai": "ที่นี่คือสถานที่ที่บันทึกของผู้ถูกลืมเลือนยังคงล่องลอยอยู่",
						"hindi": "यह वह स्थान है जहाँ भूले हुए लोगों के रिकॉर्ड मंडराते हैं।"
					}
				},
				{
					"content": {
						"korean": "무슨 의미야?",
						"english": "What does that mean?",
						"japanese": "どういう意味ですか？",
						"chinese": "这是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa eso?",
						"vietnamese": "Điều đó có nghĩa là gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "안야의 마지막 진실을 읽어내야 합니다.",
						"english": "You must uncover Anya's final truth.",
						"japanese": "アーニャの最後の真実を読み解かねばなりません。",
						"chinese": "你必须揭示安雅最后的真相。",
						"french": "Vous devez découvrir la vérité finale d'Anya.",
						"spanish": "Debes descubrir la verdad final de Anya.",
						"vietnamese": "Bạn phải khám phá sự thật cuối cùng của Anya.",
						"thai": "คุณต้องเปิดเผยความจริงสุดท้ายของอันยา",
						"hindi": "आपको अन्या की अंतिम सच्चाई को उजागर करना होगा।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "그게 뭔데?",
						"english": "What is it?",
						"japanese": "それは何ですか？",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es?",
						"vietnamese": "Đó là gì?",
						"thai": "มันคืออะไร?",
						"hindi": "वह क्या है?"
					}
				},
				{
					"content": {
						"korean": "시간이 얼마 없습니다.",
						"english": "There isn't much time left.",
						"japanese": "時間があまりありません。",
						"chinese": "时间不多了。",
						"french": "Il ne reste plus beaucoup de temps.",
						"spanish": "No queda mucho tiempo.",
						"vietnamese": "Không còn nhiều thời gian.",
						"thai": "เวลาเหลือน้อยแล้ว",
						"hindi": "ज़्यादा समय नहीं बचा है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "고대 룬에 따르면, 이 빛은… 슬픔의 결정.",
						"english": "According to ancient runes, this light is... a crystal of sorrow.",
						"japanese": "古代のルーンによると、この光は…悲しみの結晶。",
						"chinese": "根据古老符文，这道光是……悲伤的结晶。",
						"french": "Selon les runes anciennes, cette lumière est... un cristal de chagrin.",
						"spanish": "Según las runas antiguas, esta luz es... un cristal de tristeza.",
						"vietnamese": "Theo các chữ rune cổ, ánh sáng này là… một viên pha lê của nỗi buồn.",
						"thai": "ตามอักขระโบราณ แสงนี้คือ... ผลึกแห่งความโศกเศร้า",
						"hindi": "प्राचीन रुन के अनुसार, यह प्रकाश... दुख का एक क्रिस्टल है।"
					}
				},
				{
					"content": {
						"korean": "슬픔?",
						"english": "Sorrow?",
						"japanese": "悲しみ？",
						"chinese": "悲伤？",
						"french": "Chagrin ?",
						"spanish": "¿Tristeza?",
						"vietnamese": "Nỗi buồn?",
						"thai": "ความโศกเศร้า?",
						"hindi": "दुख?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "가족과의 영원한 작별을 마주하는… 그 비통함입니다.",
						"english": "It's the anguish of facing an eternal farewell to family.",
						"japanese": "家族との永遠の別れに直面する…その苦しみです。",
						"chinese": "这是面对与家人永远告别的……那种悲痛。",
						"french": "C'est l'angoisse de faire face à un adieu éternel à sa famille.",
						"spanish": "Es la angustia de enfrentar una despedida eterna de la familia.",
						"vietnamese": "Đó là nỗi đau khi đối mặt với sự chia ly vĩnh viễn với gia đình.",
						"thai": "มันคือความเจ็บปวดของการเผชิญหน้ากับการจากลาชั่วนิรันดร์กับครอบครัว",
						"hindi": "यह परिवार से एक शाश्वत विदाई का सामना करने की पीड़ा है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어…?",
						"english": "Can't stop it...?",
						"japanese": "止められないの…？",
						"chinese": "无法阻止……？",
						"french": "On ne peut pas l'arrêter...?",
						"spanish": "¿No se puede detener...?",
						"vietnamese": "Không thể dừng lại...?",
						"thai": "หยุดไม่ได้เหรอ...?",
						"hindi": "रोक नहीं सकते...?"
					}
				},
				{
					"content": {
						"korean": "지금은 오직 기록할 뿐.",
						"english": "For now, we can only record.",
						"japanese": "今はただ記録するのみ。",
						"chinese": "现在只能记录下来。",
						"french": "Pour l'instant, nous ne pouvons que l'enregistrer.",
						"spanish": "Por ahora, solo podemos registrarlo.",
						"vietnamese": "Bây giờ, chúng ta chỉ có thể ghi lại.",
						"thai": "ตอนนี้เราทำได้แค่บันทึกเท่านั้น",
						"hindi": "अभी के लिए, हम सिर्फ़ रिकॉर्ड कर सकते हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이제 돌아갈 수 없습니다. 안야는 마지막을 향해 나아가고 있어요.",
						"english": "There's no turning back now. Anya is heading towards her end.",
						"japanese": "もう戻れません。アーニャは最期に向かっています。",
						"chinese": "已经无法回头了。安雅正在走向她的终结。",
						"french": "Il n'y a plus de retour en arrière. Anya se dirige vers sa fin.",
						"spanish": "Ya no hay vuelta atrás. Anya se dirige hacia su fin.",
						"vietnamese": "Không thể quay lại nữa. Anya đang tiến đến hồi kết của mình.",
						"thai": "ไม่มีทางย้อนกลับแล้ว อันยากำลังมุ่งหน้าสู่จุดจบของเธอ",
						"hindi": "अब कोई वापसी नहीं है। अन्या अपने अंत की ओर बढ़ रही है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "알고 있어.",
						"english": "I know.",
						"japanese": "知っている。",
						"chinese": "我知道。",
						"french": "Je sais.",
						"spanish": "Lo sé.",
						"vietnamese": "Tôi biết.",
						"thai": "ฉันรู้",
						"hindi": "मुझे पता है।"
					}
				},
				{
					"content": {
						"korean": "우리는 목격자이자, 기록자입니다.",
						"english": "We are witnesses and recorders.",
						"japanese": "我々は目撃者であり、記録者である。",
						"chinese": "我们是见证者，也是记录者。",
						"french": "Nous sommes témoins et chroniqueurs.",
						"spanish": "Somos testigos y cronistas.",
						"vietnamese": "Chúng ta là những người chứng kiến và ghi chép.",
						"thai": "เราคือผู้เห็นเหตุการณ์และผู้บันทึก",
						"hindi": "हम गवाह और रिकॉर्डर हैं।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 끝까지, 함께 갈 거야.",
						"english": "We'll go together to the very end.",
						"japanese": "この終わりまで、共に。",
						"chinese": "我们会一起走到最后。",
						"french": "Nous irons ensemble jusqu'au bout.",
						"spanish": "Iremos juntos hasta el final.",
						"vietnamese": "Chúng ta sẽ đi cùng nhau đến cùng.",
						"thai": "เราจะไปพร้อมกันจนถึงที่สุด",
						"hindi": "हम अंत तक साथ चलेंगे।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_4"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "포기해라. 너희는 이 흐름을 바꿀 수 없다!",
						"english": "Give up. You cannot change this flow!",
						"japanese": "諦めろ。お前たちにこの流れは変えられない！",
						"chinese": "放弃吧。你们无法改变这个潮流！",
						"french": "Abandonnez. Vous ne pouvez pas changer ce cours des choses !",
						"spanish": "Ríndanse. ¡No pueden cambiar este flujo!",
						"vietnamese": "Bỏ cuộc đi. Các ngươi không thể thay đổi dòng chảy này!",
						"thai": "ยอมแพ้ซะ พวกเจ้าไม่อาจเปลี่ยนกระแสนี้ได้!",
						"hindi": "छोड़ दो। तुम इस प्रवाह को नहीं बदल सकते!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 아니야.",
						"english": "...Not yet.",
						"japanese": "…まだだ。",
						"chinese": "…还没。",
						"french": "...Pas encore.",
						"spanish": "...Todavía no.",
						"vietnamese": "...Chưa đâu.",
						"thai": "...ยังไม่!",
						"hindi": "...अभी नहीं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "기록은 아직… 끝나지 않았습니다.",
						"english": "The record is not... over yet.",
						"japanese": "記録はまだ…終わっていません。",
						"chinese": "记录还…没有结束。",
						"french": "Le récit n'est pas… encore terminé.",
						"spanish": "El registro aún… no ha terminado.",
						"vietnamese": "Kỷ lục vẫn… chưa kết thúc.",
						"thai": "บันทึกยัง...ไม่สิ้นสุดลง",
						"hindi": "अभिलेख अभी तक… समाप्त नहीं हुआ है।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "굳어가는 빛 앞에서, 정체 모를 그림자가 나타났다.",
						"english": "Before the fading light, an unknown shadow appeared.",
						"japanese": "薄れゆく光の前、正体不明の影が現れた。",
						"chinese": "在逐渐凝固的光芒前，一个不明身份的影子出现了。",
						"french": "Devant la lumière figée, une ombre inconnue apparut.",
						"spanish": "Ante la luz que se solidificaba, una sombra desconocida apareció.",
						"vietnamese": "Trước ánh sáng đang đông cứng, một cái bóng không rõ danh tính xuất hiện.",
						"thai": "หน้าแสงที่แข็งตัว เงาที่ไม่รู้จักปรากฏขึ้น",
						"hindi": "जमती हुई रोशनी के सामने, एक अज्ञात परछाई दिखाई दी।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "감히… 여기까지 와서 작별을 방해하려 하는가?",
						"english": "How dare you… come all this way to disrupt this farewell?",
						"japanese": "貴様…よくもここまで来て、この別れを邪魔しようとするか？",
						"chinese": "竟敢……来到这里妨碍告别？",
						"french": "Comment oses-tu… venir jusqu'ici pour perturber cet adieu ?",
						"spanish": "¿Cómo osas… llegar hasta aquí para interrumpir la despedida?",
						"vietnamese": "Ngươi dám… đến tận đây để phá hoại cuộc chia tay này sao?",
						"thai": "เจ้ากล้าดียังไง… มาถึงนี่เพื่อขัดขวางการอำลา?",
						"hindi": "हिम्मत कैसे हुई तुम्हारी… यहाँ आकर इस विदाई में बाधा डालने की?"
					}
				},
				{
					"content": {
						"korean": "네가 막을 수 없어.",
						"english": "You cannot stop this.",
						"japanese": "お前には止められない。",
						"chinese": "你阻止不了。",
						"french": "Tu ne peux pas l'arrêter.",
						"spanish": "No puedes detenerlo.",
						"vietnamese": "Ngươi không thể ngăn cản.",
						"thai": "เจ้าหยุดไม่ได้",
						"hindi": "तुम इसे रोक नहीं सकते।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이자는… 잊힌 기록의 수호자. 하지만 이제 그 시간도 끝입니다.",
						"english": "This one… is the guardian of forgotten records. But now, their time is also over.",
						"japanese": "こやつは…忘れられた記録の守護者。だが、その時間も終わりだ。",
						"chinese": "此人是……被遗忘记录的守护者。但现在，他的时间也结束了。",
						"french": "Celui-ci… est le gardien des annales oubliées. Mais maintenant, son temps est aussi révolu.",
						"spanish": "Este es… el guardián de los registros olvidados. Pero ahora, su tiempo también ha terminado.",
						"vietnamese": "Kẻ này… là người bảo hộ những ghi chép bị lãng quên. Nhưng giờ đây, thời gian của hắn cũng đã hết.",
						"thai": "ผู้นี้… คือผู้พิทักษ์บันทึกที่ถูกลืม แต่บัดนี้ เวลาของเขาก็สิ้นสุดลงแล้ว",
						"hindi": "यह… भूले हुए अभिलेखों का संरक्षक है। लेकिन अब, उसका समय भी समाप्त हो गया है।"
					}
				},
				{
					"content": {
						"korean": "건방진 것들! 이 자리에서 소멸시켜주겠다.",
						"english": "Insolent fools! I shall obliterate you right here!",
						"japanese": "無礼な奴らめ！ここで消滅させてやる！",
						"chinese": "狂妄之徒！我将在此地将你们彻底消灭！",
						"french": "Imprudents ! Je vous anéantirai sur-le-champ !",
						"spanish": "¡Insolentes! ¡Los aniquilaré aquí mismo!",
						"vietnamese": "Lũ hỗn xược! Ta sẽ tiêu diệt các ngươi ngay tại đây!",
						"thai": "พวกบังอาจ! ข้าจะกำจัดพวกเจ้า ณ ที่แห่งนี้",
						"hindi": "धृष्टों! मैं तुम्हें यहीं मिटा दूंगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크아악…! 이 작별은… 영원히… 끝나지 않는다…!",
						"english": "Argh…! This farewell… will never… truly end…!",
						"japanese": "くあああ…！この別れは…永遠に…終わらない…！",
						"chinese": "呃啊……！这次告别……永远……不会结束……！",
						"french": "Argh… ! Cet adieu… ne finira jamais… !",
						"spanish": "¡Argh…! ¡Esta despedida… nunca… terminará…!",
						"vietnamese": "Ác…! Cuộc chia tay này… sẽ không bao giờ… kết thúc…!",
						"thai": "อ๊าก…! การอำลานี้… จะไม่มีวัน… สิ้นสุด…!",
						"hindi": "आर्ग…! यह विदाई… कभी… खत्म नहीं होगी…!"
					}
				},
				{
					"content": {
						"korean": "헛소리 마.",
						"english": "Stop your nonsense.",
						"japanese": "くだらないことを言うな。",
						"chinese": "别胡说。",
						"french": "Arrête tes bêtises.",
						"spanish": "No digas tonterías.",
						"vietnamese": "Đừng nói nhảm.",
						"thai": "อย่าพูดเหลวไหล",
						"hindi": "बकवास मत करो।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이름 없는 자의 기록도 이제 끝났군요.",
						"english": "The nameless one's record has finally ended.",
						"japanese": "名もなき者の記録もついに終わりましたね。",
						"chinese": "无名者的记录也终于结束了。",
						"french": "Le récit de l'anonyme est enfin terminé.",
						"spanish": "El registro del innombrado ha llegado a su fin.",
						"vietnamese": "Kỷ lục của kẻ vô danh cuối cùng đã kết thúc.",
						"thai": "บันทึกของผู้ไร้นามได้สิ้นสุดลงแล้วสินะ",
						"hindi": "गुमनाम व्यक्ति का अभिलेख भी अब समाप्त हो गया है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "어둠이 걷히자, 안야의 빛은 더욱 투명하게 굳어갔다.",
						"english": "As darkness lifted, Anya's light solidified, becoming even more transparent.",
						"japanese": "闇が晴れると、アーニャの光はより一層透明に固まっていった。",
						"chinese": "黑暗散去，安雅的光芒变得更加透明，凝固起来。",
						"french": "Alors que l'obscurité se dissipait, la lumière d'Anya se solidifiait, devenant encore plus transparente.",
						"spanish": "A medida que la oscuridad se disipaba, la luz de Anya se solidificaba, volviéndose aún más transparente.",
						"vietnamese": "Khi bóng tối tan biến, ánh sáng của Anya càng trở nên trong suốt.",
						"thai": "เมื่อความมืดหายไป แสงของอันย่าก็แข็งตัวเป็นประกายใสยิ่งขึ้น",
						"hindi": "अंधेरा छंटते ही, आन्या का प्रकाश और भी पारदर्शी होता गया।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마지막 진실이, 한 뼘 더 가까워졌다.",
						"english": "The final truth drew a step closer.",
						"japanese": "最後の真実が、あと一歩近づいた。",
						"chinese": "最后的真相，又近了一步。",
						"french": "La vérité finale s'est rapprochée d'un pas.",
						"spanish": "La verdad final se acercó un palmo más.",
						"vietnamese": "Sự thật cuối cùng đã gần hơn một bước.",
						"thai": "ความจริงสุดท้ายเข้าใกล้มาอีกนิดแล้ว",
						"hindi": "अंतिम सत्य, एक कदम और करीब आ गया।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"이 여정의 끝, 굳어가는 빛 앞에 섰다.",
			"안야의 몸은 투명한 얼음 조각상이 되어가고.",
			"에이라는 그 잊힌 진실을 기록하려 한다.",
			"영원한 작별의 전조가, 바로 코앞이다."
		],
		"english": [
			"At journey's end, I stood before the fading light.",
			"Anya's body turns into a transparent ice sculpture.",
			"Eira endeavors to record that forgotten truth.",
			"The harbinger of an eternal farewell is imminent."
		],
		"japanese": [
			"この旅の終わりに、固まりゆく光の前に立った。",
			"アーニャの体は透明な氷の彫像と化していく。",
			"エイラは忘れられた真実を記録しようとする。",
			"永遠の別れの予兆が、もう目の前だ。"
		],
		"chinese": [
			"旅途尽头，我立于凝固之光前。",
			"安雅的身体正化作一座透明的冰雕。",
			"艾拉试图记录下那被遗忘的真相。",
			"永恒告别的预兆，近在眼前。"
		],
		"french": [
			"Au terme de ce voyage, je me tins devant la lumière qui se figeait.",
			"Le corps d'Anya se transforme en une sculpture de glace transparente.",
			"Eira tente de consigner la vérité oubliée.",
			"Le présage d'un adieu éternel est imminent."
		],
		"spanish": [
			"Al final del viaje, me postré ante la luz que se solidificaba.",
			"El cuerpo de Anya se transforma en una escultura de hielo transparente.",
			"Eira intenta registrar esa verdad olvidada.",
			"El presagio de un adiós eterno está a la vuelta de la esquina."
		],
		"vietnamese": [
			"Cuối hành trình, ta đứng trước ánh sáng đang hóa đá.",
			"Cơ thể Anya đang hóa thành tượng băng trong suốt.",
			"Eira cố gắng ghi lại sự thật bị lãng quên.",
			"Dấu hiệu của lời từ biệt vĩnh cửu, ngay trước mắt."
		],
		"thai": [
			"ณ ปลายทางแห่งการเดินทางนี้ ข้าพเจ้าได้ยืนอยู่เบื้องหน้าแสงที่กำลังแข็งทื่อ",
			"ร่างของอันย่ากำลังกลายเป็นประติมากรรมน้ำแข็งใส",
			"เอร่าพยายามบันทึกความจริงที่ถูกลืมเลือนนั้น",
			"ลางสังหรณ์ของการอำลาชั่วนิรันดร์อยู่ตรงหน้าแล้ว"
		],
		"hindi": [
			"इस यात्रा के अंत में, मैं उस कठोर होती हुई रोशनी के समक्ष खड़ा था।",
			"आन्या का शरीर पारदर्शी बर्फ की मूर्ति बनता जा रहा है।",
			"ईरा उस भूली हुई सच्चाई को दर्ज करने का प्रयास करती है।",
			"शाश्वत विदाई का अग्रदूत, ठीक सामने है।"
		]
	}
} as const;
